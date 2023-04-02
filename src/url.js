let apiUrl = 'https://back-minga.onrender.com/api/'
if (process.env.NODE_ENV ==='production' ) {
 apiUrl = process.env.REACT_APP_URL
}
export default apiUrl