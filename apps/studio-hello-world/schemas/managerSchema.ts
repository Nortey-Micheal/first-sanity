import { defineField,defineType } from "sanity";

export const managerType = defineType({
    name: "manager",
    title: "Manager",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "age",
            title: "Age",
            type: "number"
        })
    ]
})