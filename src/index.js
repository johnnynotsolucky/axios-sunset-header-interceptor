import interceptor from "./interceptor";

const extractHeaders = ({ headers }) => headers;

const sunsetHeaderInterceptor = f => interceptor(extractHeaders, f);

export default sunsetHeaderInterceptor;
