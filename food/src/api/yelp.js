import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 9PxLl-OImOifz_mlzopW9-U96h9mvbMGku8bUCTv5xlYCynPf0ZE6Tnvjf7v8p4lxJVLuqpYTmrDP2LuRF2T6AEOnThQkFXuiXMtUAGTBu73gZyLsfU05BPnpAE0X3Yx'
    }
});