const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const create = async(req, res) => {
    try {
        const response = await airplaneService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created the airplane',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airplane'
        })
    }
}


const destroy = async(req, res) => {
    try {
        const response = await airplaneService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the airplane',
            err: error
        });
    }
}


const get = async(req, res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a airplane ',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the airplane',
            err: error
        });
    }
}


const update = async(req, res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airplane',
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        const cities = await airplaneService.getAll(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airplane',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}