const Category = require('./model')

const create = async (req, res, next) => {
    try {
        const { name } = req.body
        const result = await Category.create({ name })
        res.status(201).json({
            message: "Add data successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const index = async (req, res, next) => {
    try {
        const result = await Category.find()
        res.status(200).json({
            message: "Get Data successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Category.findOne({ _id: id })

        if (!result) {
            return res.status(404).json({
                message: `Category with there id is not found`
            })
        }
        res.status(200).json({
            message: "Find data successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const result = await Category.findOneAndUpdate({ _id: id }, { name }, { runValidators: true, new: true })
        res.status(200).json({
            message: "Category Successfully updated",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Category.findOneAndDelete({ _id: id })

        res.status(200).json({
            message: "Data successfully deleted",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    index,
    find,
    update,
    destroy
}