const http = require("http");

function creatreContent(pageName) {
	const navBar = `<a href="http://localhost:8080"><button>Home</button></a>
    <a href="http://localhost:8080/about"><button>About</button></a>
    <a href="http://localhost:8080/contact"><button>Contact</button></a>
    <br>
    <h2>${pageName}</h2>
    `;
	return navBar;
}

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end(creatreContent("home"));
		return;
	} else if (req.url === "/about") {
		res.end(creatreContent("about"));
		return;
	} else if (req.url === "/contact") {
		res.end(creatreContent("contact"));
		return;
	} else {
		res.statusCode = 404;
		res.end("<h1>Error 404 - Page not found</h1>");
	}
});

server.listen(8080, () => {
	console.log("listening to port 8080");
});
