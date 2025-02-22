import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";

import "./Maps.scss";

const Maps = () => (
	<div>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14379.799418338926!2d44.86534121906999!3d40.74046266323563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041acd13eb6c271%3A0xc2c4cd041074fe13!2z1LTVq9Ws1avVu9Wh1bY!5e0!3m2!1shy!2sam!4v1682243115373!5m2!1shy!2sam" width="1000" height="220" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		<div id="navigationButton">
			<a id="navButton" href="https://www.google.com/maps/dir//%D4%B4%D5%AB%D5%AC%D5%AB%D5%BB%D5%A1%D5%B6/@40.7404567,44.8630949,15.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4041acd13eb6c271:0xc2c4cd041074fe13!2m2!1d44.8625965!2d40.7405524"><NavigationIcon /></a>
		</div>
	</div>
);

export default Maps;
