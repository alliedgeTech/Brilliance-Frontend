import GlobalProperties from "./GlobalProperties";

const CallFor = async (requestUrl, method, data) => {
  let url = '';
  if (GlobalProperties.environment === "LIVE") {
    url = GlobalProperties.urlParam + requestUrl;
  } else if (GlobalProperties.environment === "TEST") {
    url = GlobalProperties.testParam + requestUrl;
  } else {
    url = GlobalProperties.localUrlParam + requestUrl;
  }
  const header = new Headers();
   header.append('Content-Type', 'application/json');
  const requestOptions = {
    method: method,
    headers: header,
    body: data
  };
  const returnResponse = {
    status: 500,
    message: 'Server Error Found'
  };
  try {
    return await fetch(url, requestOptions)
      .then((res) => {
        return res;
      }).catch((error) => {
        // handleError(error);
        return returnResponse;
      });
  } catch (error) {
    return returnResponse;
  }
};
export default CallFor;