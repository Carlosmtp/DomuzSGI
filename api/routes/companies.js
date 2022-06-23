const express = require("express");
const api = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const regex = require("../regular_expresions")
api.post("/create/company", async (req, res) => {
    try {
        const data = req.body
        if(!Object.keys(data).includes('nit')){
            throw new Error('se requiere \'nit\' para crear la empresa')
        } else if(!regex.validate(regex.NIT, data.nit)){
            throw new Error('el campo nit no cuenta con el formato requerido: 1235678-9')

        } else if(!Object.keys(data).includes('name')){
            throw new Error('se requiere \'name\' para crear la empresa')
        } else {
            const company = await prisma.companies.create({
                data: {
                    nit: data.nit,
                    name: data.name,
                },
            });
            res.json(company)
        }

    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

api.get("/get/companies", async (req, res) => {
    const companies = await prisma.companies.findMany()
    res.json(companies)
})

api.get("/get/companie", async (req, res) => {
    const data = req.body
    const nit = data.nit
    try {
        const companie = await prisma.companies.findUnique({
            where: {
                nit: nit
            },
        });
    if(companie == null){
      throw new Error("La empresa no existe en el sistema");
    } else{
        res.json(companie)
    }
    } catch (e) {
        res.json({error: e.message})
    }
})
module.exports = api;