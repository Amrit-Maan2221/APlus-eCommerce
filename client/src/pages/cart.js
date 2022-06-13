import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./Cart.css";

function Cart() {
	return (
		<div className="cart_container">
			<Navbar />
			<Announcement />
			<div className="cart_wrapper">
				<h1 className="cart_title">YOUR BAG</h1>
				<div className="cart_top">
					<button className="cart_topButton">
						CONTINUE SHOPPING
					</button>
					<div className="cart_topTexts">
						<span className="cart_topText">Shopping Bag(2)</span>
						<span className="cart_topText">Your Wishlist (0)</span>
					</div>
					<button
						className="cart_topButton"
						style={{
							color: "white",
							border: "none",
							backgroundColor: "black",
						}}
					>
						CHECKOUT NOW
					</button>
				</div>
				<div className="cart_bottom">
					<div className="cart_info">
						<div className="cart_product">
							<div className="cart_productDetail">
								<img
									className="cart_productImage"
									src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
								/>
								<div className="cart_productSpecificDetail">
									<span className="cart_productName">
										<b>Product:</b> JESSIE THUNDER SHOES
									</span>
									<span className="cart_productID">
										<b>ID:</b> 93813718293
									</span>
									<div
										className="cart_productColor"
										style={{ backgroundColor: "black" }}
									/>
									<span className="cart_productSize">
										<b>Size:</b> 37.5
									</span>
								</div>
							</div>
							<div className="cart_priceDetail">
								<div className="cart_productAmountContainer">
									<Add />
									<div className="cart_productAmount">2</div>
									<Remove />
								</div>
								<div className="cart_productPrice">$ 30</div>
							</div>
						</div>
						<hr className="cart_horizontalRule" />
						<div className="cart_product">
							<div className="cart_productDetail">
								<img
									className="cart_productImage"
									src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
								/>
								<div className="cart_productSpecificDetail">
									<span className="cart_productName">
										<b>Product:</b> HAKURA T-SHIRT
									</span>
									<span className="cart_productID">
										<b>ID:</b> 93813718293
									</span>
									<div
										className="cart_productColor"
										style={{ backgroundColor: "gray" }}
									/>
									<span className="cart_productSize">
										<b>Size:</b> 37.5
									</span>
								</div>
							</div>
							<div className="cart_priceDetail">
								<div className="cart_productAmountContainer">
									<Add />
									<div className="cart_productAmount">1</div>
									<Remove />
								</div>
								<div className="cart_productPrice">$ 20</div>
							</div>
							<hr className="cart_horizontalRule" />
						</div>
					</div>
					<div className="cart_summary">
						<div className="cart_summaryTitle">ORDER SUMMARY</div>
						<div className="cart_summaryItem">
							<span className="car_SummaryItemText">
								Subtotal
							</span>
							<span>$ 80</span>
						</div>
						<div className="cart_summaryItem">
							<span className="car_SummaryItemText">
								Estimated Shipping
							</span>
							<span>$ 5.90</span>
						</div>
						<div className="cart_summaryItem">
							<span className="car_SummaryItemText">
								Shipping Discount
							</span>
							<span>$ -5.90</span>
						</div>
						<div
							className="cart_summaryItem"
							style={{ fontWeight: "500", fontSize: "24px" }}
						>
							<span className="car_SummaryItemText">Total</span>
							<span>$ 80</span>
						</div>
						<button className="cart_checkoutButton">
							CHECKOUT NOW
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Cart;
