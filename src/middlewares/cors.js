export default function cors(request, response, next) {
  response.header('Access-Control-Allow-Origin', 'https://jonasaugusto-react-app.surge.sh');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Allow-Methods', '*');
  response.header('Access-Control-Max-Age', '10');

  next();
}
