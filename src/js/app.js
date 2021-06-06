import API from './API';
import Controller from './Controller';
import Layout from './Layout';

const app = new Controller(new Layout(), new API());
app.init();
