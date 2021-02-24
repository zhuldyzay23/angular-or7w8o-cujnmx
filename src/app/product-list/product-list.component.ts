import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  // tslint:disable-next-line:typedef
  share(url, name) {
    const l = "https://t.me/share/url?url=" + url + "&text=" + name;
    window.open(l, "_blank");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
