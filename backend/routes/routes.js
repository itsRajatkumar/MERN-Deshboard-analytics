const express = require("express");
const SalesDB = require("../schema/productsales");
const app = express();

app.post("/add", (req, res) => {
	try {
		const { product_name, date, quantity } = req.body;
		if (product_name == "" && date == "" && quantity == ""
			|| !product_name && !date && !quantity) {
			return res
				.status(400)
				.json({ status: "error", message: " Insufficient Data" });
		}
		const newdate = new Date(date)
		console.log(newdate)
		const sale = new SalesDB({
			product_name,
			date: newdate,
			quantity,
		});
		sale.save();
		return res.status(201).json({ status: "success", message: "Product Stored" });
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ status: "error", message: "Internal Server Error" });
	}
});

app.get("/chart-data", (req, res) => {
	try {
		var type = req.query.type;
		var range = req.query.range;
		var data = req.query.data;
		console.log(data)
		if (type === "normal") {
			if (range === "year") {
				SalesDB.find({
					"date": {
						$gte: new Date(`${data}-01-01`),
						$lt: new Date(`${data + 1}-01-01`),
					}
				}, (err, result) => {
					console.log(err, result)
					var response = {
						label: [], dataset: [
							{ label: "A", data: [] },
							{ label: "B", data: [] },
							{ label: "C", data: [] },
							{ label: "D", data: [] }
						]
					}
					var st = new Set()
					var mapA = new Map()
					var mapB = new Map()
					var mapC = new Map()
					var mapD = new Map()
					result.map((item) => {
						if (!mapA.has(item.date.toLocaleString('default', { month: 'long' }))) {
							mapA.set(item.date.toLocaleString('default', { month: 'long' }), 0)
						}
						if (!mapB.has(item.date.toLocaleString('default', { month: 'long' }))) {
							mapB.set(item.date.toLocaleString('default', { month: 'long' }), 0)
						}
						if (!mapC.has(item.date.toLocaleString('default', { month: 'long' }))) {
							mapC.set(item.date.toLocaleString('default', { month: 'long' }), 0)
						}
						if (!mapD.has(item.date.toLocaleString('default', { month: 'long' }))) {
							mapD.set(item.date.toLocaleString('default', { month: 'long' }), 0)
						}
						st.add(item.date.toLocaleString('default', { month: 'long' }))
						if (item.product_name === "A") {
							mapA.set(item.date.toLocaleString('default', { month: 'long' }), mapA.get(item.date.toLocaleString('default', { month: 'long' })) + item.quantity);
						}
						if (item.product_name === "B") {
							mapB.set(item.date.toLocaleString('default', { month: 'long' }), mapB.get(item.date.toLocaleString('default', { month: 'long' })) + item.quantity);
						}
						if (item.product_name === "C") {
							mapC.set(item.date.toLocaleString('default', { month: 'long' }), mapC.get(item.date.toLocaleString('default', { month: 'long' })) + item.quantity);
						}
						if (item.product_name === "D") {
							mapD.set(item.date.toLocaleString('default', { month: 'long' }), mapD.get(item.date.toLocaleString('default', { month: 'long' })) + item.quantity);
						}

					})
					st = Array.from(st).reverse()
					var arrA = st.map((ele) => {
						return mapA.get(ele);
					})
					var arrB = st.map((ele) => {
						return mapB.get(ele);
					})
					var arrC = st.map((ele) => {
						return mapC.get(ele);
					})
					var arrD = st.map((ele) => {
						return mapD.get(ele);
					})
					console.log(arrA)

					response.label = [...st]
					response.dataset[0].data = [...arrA]
					response.dataset[1].data = [...arrB]
					response.dataset[2].data = [...arrC]
					response.dataset[3].data = [...arrD]
					console.log(response)

					return res.status(200).json({ status: "success", message: "success", data: response });
				})
			}
			else if (range === "month") {
				const localdate = data.split("-");
				console.log(localdate)
				SalesDB.find({
					"date": {
						$gte: new Date(`${localdate[0]}-${localdate[1]}-01T00:00:00.000Z`),
						$lte: new Date(`${localdate[0]}-${localdate[1]}-31T00:00:00.000Z`),
					}
				}, (err, result) => {
					console.log(err, result)
					var response = {
						label: [], dataset: [
							{ label: "A", data: [] },
							{ label: "B", data: [] },
							{ label: "C", data: [] },
							{ label: "D", data: [] }
						]
					}
					return res.status(200).json({ status: "success", message: "success", data: result });
				})
			}
			else if (range === "day") {
				const localdate = data.split("-");
				console.log(localdate)
				SalesDB.find({
					"date": new Date(`${localdate[0]}-${localdate[1]}-${localdate[2]}T00:00:00.000Z`)
				}, (err, result) => {
					console.log(err, result)
					return res.status(200).json({ status: "success", message: "success", data: result });
				})
			}
			else if (range === "last7") {
				let localdate = new Date().toLocaleDateString().split("/")
				let localdate_7day = new Date()
				localdate_7day.setDate(localdate_7day.getDate() - 7);
				const secondlocaldate = localdate_7day.toLocaleDateString().split("/")
				console.log(localdate)
				console.log(secondlocaldate)
				SalesDB.find({
					"date": {
						$gte: new Date(`${secondlocaldate[2]}-${secondlocaldate[0]}-${secondlocaldate[1] < 10 ? "0" + secondlocaldate[1] : secondlocaldate[1]}T00:00:00.000Z`),
						$lte: new Date(`${localdate[2]}-${localdate[0]}-${localdate[1]}T00:00:00.000Z`),
					}
				}, (err, result) => {
					console.log(err, result)
					return res.status(200).json({ status: "success", message: "success", data: result });
				})
			}
		}


	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ status: "error", message: "Internal Server Error" });
	}
});
app.get("/table", (req, res) => {
	try {

		SalesDB.find({}, (err, result) => {
			console.log(err, result)
			return res.status(200).json({ status: "success", message: "success", data: result });
		})

	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ status: "error", message: "Internal Server Error" });
	}
});

module.exports = app;
