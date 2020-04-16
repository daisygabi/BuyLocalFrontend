import AjaxService from "./AjaxService";

export class ProductService {

    getAjaxService() {
        if (!this.ajaxService) {
            this.ajaxService = new AjaxService();
        }
        return this.ajaxService;
    }

    getAllProducts() { return this.getAjaxService().get('/products/')};
}