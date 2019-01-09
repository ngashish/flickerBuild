(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/album/album.component.css":
/*!*******************************************!*\
  !*** ./src/app/album/album.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.content:after, .gallery:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\nbody {\n  background: #eee;\n  color: #666;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  -webkit-backface-visibility: hidden;\n  text-align: center;\n  font-weight: 300;\n}\nh1, h2 {\n  font-weight: 200;\n  color: #999;\n}\nh1 {\n  font-size: 38px;\n  margin-bottom: 2.1739130435%;\n}\np {\n  color: #666;\n}\nhr {\n  background: none;\n  margin: 4.347826087% 0;\n  border: none;\n  border-bottom: 1px solid #ddd;\n}\na {\n  text-decoration: none;\n  color: #FF0080;\n}\n.container {\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0 auto;\n}\n.container:after {\n  content: \" \";\n  display: block;\n  clear: both;\n}\n.content {\n  padding: 4.347826087%;\n}\n.content img {\n  width: 100%;\n}\n.gallery {\n  margin: 0 auto;\n  text-align: center;\n  width: 100%;\n}\n.gallery li {\n  width: 21.7391304348%;\n  float: left;\n  text-align: center;\n  position: relative;\n  margin-bottom: 4.347826087%;\n  display: inline-block;\n}\n.gallery li:nth-child(4n + 1) {\n  margin-left: 0;\n  margin-right: -100%;\n  clear: both;\n  margin-left: 0;\n}\n.gallery li:nth-child(4n + 2) {\n  margin-left: 26.0869565217%;\n  margin-right: -100%;\n  clear: none;\n}\n.gallery li:nth-child(4n + 3) {\n  margin-left: 52.1739130435%;\n  margin-right: -100%;\n  clear: none;\n}\n.gallery li:nth-child(4n + 4) {\n  margin-left: 78.2608695652%;\n  margin-right: -100%;\n  clear: none;\n}\n@media (max-width: 48rem) {\n  .gallery li {\n    width: 30.4347826087%;\n    float: left;\n  }\n  .gallery li:nth-child(3n + 1) {\n    margin-left: 0;\n    margin-right: -100%;\n    clear: both;\n    margin-left: 0;\n  }\n  .gallery li:nth-child(3n + 2) {\n    margin-left: 34.7826086957%;\n    margin-right: -100%;\n    clear: none;\n  }\n  .gallery li:nth-child(3n + 3) {\n    margin-left: 69.5652173913%;\n    margin-right: -100%;\n    clear: none;\n  }\n}\n@media (max-width: 30rem) {\n  .gallery li {\n    width: 47.8260869565%;\n    float: left;\n  }\n  .gallery li:nth-child(2n + 1) {\n    margin-left: 0;\n    margin-right: -100%;\n    clear: both;\n    margin-left: 0;\n  }\n  .gallery li:nth-child(2n + 2) {\n    margin-left: 52.1739130435%;\n    margin-right: -100%;\n    clear: none;\n  }\n}\n@media (max-width: 20rem) {\n  .gallery li {\n    width: 100%;\n    float: left;\n  }\n  .gallery li:nth-child(1n + 1) {\n    margin-left: 0;\n    margin-right: -100%;\n    clear: both;\n    margin-left: 0;\n  }\n}\n.gallery li h2 {\n  color: #999;\n  font-size: 13.5px;\n  letter-spacing: 1px;\n  margin-top: 2.1739130435%;\n  text-transform: uppercase;\n}\n.gallery li .imgwrap {\n  background-color: #fff;\n  padding: 8px;\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.gallery li .imgmask {\n  background: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/2000px-Plus_font_awesome.svg.png\") 50%/25px no-repeat;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 1;\n  vertical-align: bottom;\n  text-align: center;\n  transition: all .25s ease-out;\n}\n.gallery li img {\n  width: 100%;height: 50%;\n  vertical-align: top;\n  transition: all .25s ease-out;\n}\n@media (max-width: 20rem) {\n  .gallery li img {\n    width: 100%;\n  }\n}\n.gallery li:hover img {\n  opacity: 0;\n  transition: all .25s ease-out;\n}\n.gallery li:hover .imgmask {\n  background: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/2000px-Plus_font_awesome.svg.png\") 50%/85px no-repeat;\n  opacity: 1;\n  transition: all .25s ease-out;\n}\nfooter {\n  font-size: 14.5px;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7QUFDaEU7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtDQUM5QjtBQUVEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7Q0FDL0I7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZUFBZTtDQUNoQjtBQUNEO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYjtBQUNEO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLFlBQVk7R0FDYjtFQUNEO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixZQUFZO0dBQ2I7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLFlBQVk7R0FDYjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0dBQ2I7RUFDRDtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7R0FDaEI7Q0FDRjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJDQUEyQztDQUM1QztBQUNEO0VBQ0UsdUpBQXVKO0VBQ3ZKLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0UsWUFBWSxZQUFZO0VBQ3hCLG9CQUFvQjtFQUNwQiw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFO0lBQ0UsWUFBWTtHQUNiO0NBQ0Y7QUFDRDtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFLHVKQUF1SjtFQUN2SixXQUFXO0VBQ1gsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcbi5jb250ZW50OmFmdGVyLCAuZ2FsbGVyeTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5oMSwgaDIge1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogIzk5OTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDM4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIuMTczOTEzMDQzNSU7XG59XG5cbnAge1xuICBjb2xvcjogIzY2Njtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDQuMzQ3ODI2MDg3JSAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGMDA4MDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDQuMzQ3ODI2MDg3JTtcbn1cbi5jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ2FsbGVyeSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmdhbGxlcnkgbGkge1xuICB3aWR0aDogMjEuNzM5MTMwNDM0OCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNC4zNDc4MjYwODclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZ2FsbGVyeSBsaTpudGgtY2hpbGQoNG4gKyAxKSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uZ2FsbGVyeSBsaTpudGgtY2hpbGQoNG4gKyAyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyNi4wODY5NTY1MjE3JTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgY2xlYXI6IG5vbmU7XG59XG4uZ2FsbGVyeSBsaTpudGgtY2hpbGQoNG4gKyAzKSB7XG4gIG1hcmdpbi1sZWZ0OiA1Mi4xNzM5MTMwNDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgY2xlYXI6IG5vbmU7XG59XG4uZ2FsbGVyeSBsaTpudGgtY2hpbGQoNG4gKyA0KSB7XG4gIG1hcmdpbi1sZWZ0OiA3OC4yNjA4Njk1NjUyJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgY2xlYXI6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgLmdhbGxlcnkgbGkge1xuICAgIHdpZHRoOiAzMC40MzQ3ODI2MDg3JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZ2FsbGVyeSBsaTpudGgtY2hpbGQoM24gKyAxKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZ2FsbGVyeSBsaTpudGgtY2hpbGQoM24gKyAyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM0Ljc4MjYwODY5NTclO1xuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gICAgY2xlYXI6IG5vbmU7XG4gIH1cbiAgLmdhbGxlcnkgbGk6bnRoLWNoaWxkKDNuICsgMykge1xuICAgIG1hcmdpbi1sZWZ0OiA2OS41NjUyMTczOTEzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICAgIGNsZWFyOiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzByZW0pIHtcbiAgLmdhbGxlcnkgbGkge1xuICAgIHdpZHRoOiA0Ny44MjYwODY5NTY1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZ2FsbGVyeSBsaTpudGgtY2hpbGQoMm4gKyAxKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZ2FsbGVyeSBsaTpudGgtY2hpbGQoMm4gKyAyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUyLjE3MzkxMzA0MzUlO1xuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gICAgY2xlYXI6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAuZ2FsbGVyeSBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmdhbGxlcnkgbGk6bnRoLWNoaWxkKDFuICsgMSkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5nYWxsZXJ5IGxpIGgyIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tdG9wOiAyLjE3MzkxMzA0MzUlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmdhbGxlcnkgbGkgLmltZ3dyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZ2FsbGVyeSBsaSAuaW1nbWFzayB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jZS9QbHVzX2ZvbnRfYXdlc29tZS5zdmcvMjAwMHB4LVBsdXNfZm9udF9hd2Vzb21lLnN2Zy5wbmdcIikgNTAlLzI1cHggbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbn1cbi5nYWxsZXJ5IGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO2hlaWdodDogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAuZ2FsbGVyeSBsaSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZ2FsbGVyeSBsaTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcbn1cbi5nYWxsZXJ5IGxpOmhvdmVyIC5pbWdtYXNrIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2NlL1BsdXNfZm9udF9hd2Vzb21lLnN2Zy8yMDAwcHgtUGx1c19mb250X2F3ZXNvbWUuc3ZnLnBuZ1wiKSA1MCUvODVweCBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xufVxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDE0LjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/album/album.component.html":
/*!********************************************!*\
  !*** ./src/app/album/album.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <main class=\"content\">\n    <hr>\n    <ul class=\"gallery\">\n      <li *ngFor=\"let image of images\">\n        <div class=\"imgwrap\">\n          <a (click)='navigateTo(image)'>\n            <img src={{image.imageUrl}} style=\"height: 150px\" alt={{image.imageUrl}}>\n            <span class=\"imgmask\"></span>\n          </a>\n        </div>\n        <rating [(ngModel)]=\"image.rating\" [max]=\"max\" [readonly]=\"true\"></rating>\n      </li>\n    </ul>\n    <hr>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/album/album.component.ts":
/*!******************************************!*\
  !*** ./src/app/album/album.component.ts ***!
  \******************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _getimages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getimages.service */ "./src/app/getimages.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(imgService, route) {
        this.imgService = imgService;
        this.route = route;
        this.images = [{}];
        this.title = 'Flicker';
        this.max = 5;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgService.getImages()
            .subscribe(function (data) {
            data.photos.photo.forEach(function (picData) {
                var src = "";
                src += "https://farm" + picData.farm + ".staticflickr.com/" + picData.server + "/" + picData.id + "_" + picData.secret + ".jpg";
                _this.images.push({
                    image: picData,
                    imageUrl: src,
                    rating: 3,
                    ratingBy: "",
                    ratingReason: ""
                });
            });
            _this.images.shift();
            var obj = JSON.parse(localStorage.getItem('itemToUpdate'));
            console.log(_this.images);
            if (localStorage.getItem('itemToUpdate')) {
                _this.images.map(function (ele) {
                    if (obj.image.id == ele.image.id) {
                        _this.images[_this.images.indexOf(ele)] = obj;
                    }
                });
            }
        });
    };
    AlbumComponent.prototype.navigateTo = function (image) {
        this.route.navigate(['/individual']);
        localStorage.setItem('imageSelected', JSON.stringify(image));
    };
    AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/album/album.component.html"),
            styles: [__webpack_require__(/*! ./album.component.css */ "./src/app/album/album.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_getimages_service__WEBPACK_IMPORTED_MODULE_2__["GetimagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_info_image_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-info/image-info.component */ "./src/app/image-info/image-info.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");





var routes = [{
        path: '', redirectTo: '/home', pathMatch: 'full'
    }, {
        path: 'home', component: _album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"],
    }, {
        path: 'individual', component: _image_info_image_info_component__WEBPACK_IMPORTED_MODULE_3__["ImageInfoComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm5/ngx-bootstrap-rating.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _getimages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getimages.service */ "./src/app/getimages.service.ts");
/* harmony import */ var _image_info_image_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-info/image-info.component */ "./src/app/image-info/image-info.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _image_info_image_info_component__WEBPACK_IMPORTED_MODULE_9__["ImageInfoComponent"],
                _album_album_component__WEBPACK_IMPORTED_MODULE_10__["AlbumComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_4__["RatingModule"].forRoot()
            ],
            providers: [_getimages_service__WEBPACK_IMPORTED_MODULE_8__["GetimagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/getimages.service.ts":
/*!**************************************!*\
  !*** ./src/app/getimages.service.ts ***!
  \**************************************/
/*! exports provided: GetimagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetimagesService", function() { return GetimagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetimagesService = /** @class */ (function () {
    function GetimagesService(http) {
        this.http = http;
    }
    GetimagesService.prototype.getImages = function () {
        return this.http.get('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a14611c688ebd20dc5fe13b3073f146a&per_page=30&gallery_id=66911286-72157703406532791&format=json&nojsoncallback=1');
    };
    GetimagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetimagesService);
    return GetimagesService;
}());



/***/ }),

/***/ "./src/app/image-info/image-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/image-info/image-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: auto;\n    text-align: center;\n  }\n  \n  .title {\n    color: grey;\n    font-size: 18px;\n  }\n  \n  /* Full-width input fields */\n  \n  input[type=text] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  textarea{\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  input[type=text]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n  \n  /* Set a style for the submit button */\n  \n  .btn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 40%;\n    opacity: 0.9;\n    font-size: larger;\n    margin: 6px;\n  }\n  \n  .btnCancel{\n    background-color: #FF0000;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 40%;\n    opacity: 0.9;\n    font-size: larger;\n    margin: 6px;\n  }\n  \n  .btn:hover {\n    opacity: 1;\n  }\n  \n  .custom-rating{\n      font-size: x-large;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtaW5mby9pbWFnZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0dBQ2pCOztFQUdELDZCQUE2Qjs7RUFDN0I7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isb0JBQW9CO0dBQ3JCOztFQUNEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG9CQUFvQjtHQUNyQjs7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixjQUFjO0dBQ2Y7O0VBRUQsdUNBQXVDOztFQUN2QztJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtHQUNiOztFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0dBQ2I7O0VBR0Q7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7TUFDSSxtQkFBbUI7R0FDdEIiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1pbmZvL2ltYWdlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcblxuICAvKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIHRleHRhcmVhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIG1hcmdpbjogNnB4O1xuICB9XG4gIC5idG5DYW5jZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgbWFyZ2luOiA2cHg7XG4gIH1cblxuXG4gIC5idG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5jdXN0b20tcmF0aW5ne1xuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/image-info/image-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/image-info/image-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img src=\"{{selectedImage.imageUrl}}\" style=\"height: 100px\" alt=\"John\" style=\"width:100%\">\n  <form [formGroup]='imageRating' (ngSubmit)='submit()' class=\"container\">\n    <rating formControlName=\"rating\" [max]=\"max\" class=\"custom-rating\" [readonly]=\"false\"></rating>\n    <input type=\"text\" placeholder=\"Rate By\" formControlName=\"ratingBy\" required>\n    <textarea row='4' col='10' placeholder=\"Reason\" formControlName=\"ratingReason\" required></textarea>\n    <div>\n      <button type=\"submit\" class=\"btn\">Submit</button>\n      <button type=\"button\" class=\"btn\" (click)='navigateTo()'>Cancel</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/image-info/image-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-info/image-info.component.ts ***!
  \****************************************************/
/*! exports provided: ImageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInfoComponent", function() { return ImageInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImageInfoComponent = /** @class */ (function () {
    function ImageInfoComponent(route) {
        this.route = route;
        this.max = 5;
    }
    ImageInfoComponent.prototype.ngOnInit = function () {
        var data = JSON.parse(localStorage.getItem('imageSelected'));
        this.selectedImage = data;
        this.imageRating = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedImage.image),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedImage.imageUrl),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedImage.rating),
            ratingBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedImage.ratingBy),
            ratingReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedImage.ratingReason)
        });
    };
    ImageInfoComponent.prototype.submit = function () {
        localStorage.setItem('itemToUpdate', JSON.stringify(this.imageRating.value));
        this.route.navigate(['/home']);
    };
    ImageInfoComponent.prototype.navigateTo = function () {
        this.route.navigate(['/home']);
    };
    ImageInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-info',
            template: __webpack_require__(/*! ./image-info.component.html */ "./src/app/image-info/image-info.component.html"),
            styles: [__webpack_require__(/*! ./image-info.component.css */ "./src/app/image-info/image-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ImageInfoComponent);
    return ImageInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ng-ashish/flikr/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map