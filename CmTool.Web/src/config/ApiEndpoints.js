import _ from 'lodash';

const ApiEndPointRoot = 'http://localhost:51407';

const ApiEndPoints = {
    Jenkins: 'Jenkins',
    Module : 'Module'
};


const buildEndpointPath = (desiredAPIEndpoint) => {
    if (!APIEndpoints[desiredAPIEndpoint].startsWith('http')) {
        return `${ApiEndPointRoot}${APIEndpoints[desiredAPIEndpoint]}`;
    }

    return APIEndpoints[desiredAPIEndpoint];
};


const enrichedEndpointPath = (desiredAPIEndpoint, params) => {
    let path = buildEndpointPath(desiredAPIEndpoint);
    if (_.isPlainObject(params)) {
        _.forEach(params, (value, key) => {
            path = _.replace(path, `:${key}`, value);
        });
    } else if (_.isNumber(params) || _.isString(params)) {        
        path = `${path}/${params}`;
    }

    return path;
};




export default (desiredAPIEndpoint, params = null) => {
    if (desiredAPIEndpoint in APIEndpoints) {
        return enrichedEndpointPath(desiredAPIEndpoint, params);
    }
    throw new Error('Endpoint not found "${desiredAPIEndpoint}"');
};