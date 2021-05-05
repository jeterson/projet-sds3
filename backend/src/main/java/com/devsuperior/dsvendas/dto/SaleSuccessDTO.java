package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSuccessDTO {

	private String sellerName;
	private Long visited;
	private Long deals;
	
	
	
	
	public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
		this.sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}
	
	
	

	public Long getVisited() {
		return visited;
	}




	public void setVisited(Long visited) {
		this.visited = visited;
	}




	public Long getDeals() {
		return deals;
	}




	public void setDeals(Long deals) {
		this.deals = deals;
	}




	public SaleSuccessDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	
	
	
	
}
