

class SearchHelper {

	constructor(){
		this.search = this.search.bind(this);
	}

	search(text){
		return {
			meals : [{
				mealId: 1,
				mealName: "Cookuri Kaa",
				KookInfo : {
					Name: "Hajur bau",
					ImageSrc : "/abcd/hajaubau.jpg",
					SpecialityMeal: "Choila" ,
					Review : {Stars: 4.8, TotalReviews:500}
				},
				mealDetails : {
					Price: "8.99",
					Loc: "32,23,453,54",
					ServedDays:"157", // 1 = Sunday, 5 = Thu, 7= Sat
					Review : {Stars: 4.5, TotalReviews : 345}
				}
			},
			{
				mealId: 2,
				mealName: "Ho0okuri Kaa",
				KookInfo : {
					Name: "Hajur Aama",
					ImageSrc : "/abcd/hajuraama.jpg",
					SpecialityMeal: "Choili" ,
					Review : {Stars: 4.1, TotalReviews:600}
				},
				mealDetails : {
					Price: "9.99",
					Loc: "36,23,453,54",
					ServedDays:"135", // 1 = Sunday, 5 = Thu, 7= Sat
					Review : {Stars: 4.5, TotalReviews : 335}
				}
			},
			{
				mealId: 6,
				mealName: "Cookuri Kaauli",
				KookInfo : {
					Name: "Jiju  bau",
					ImageSrc : "/abcd/jijubau.jpg",
					SpecialityMeal: "Chuira" ,
					Review : {Stars: 4.8, TotalReviews:800}
				},
				mealDetails : {
					Price: "8.99",
					Loc: "32,23,453,54",
					ServedDays:"157",// 1 = Sunday, 5 = Thu, 7= Sat
					Review : {Stars: 4.9, TotalReviews : 501}
				}
			  }
			]
		}

	}


}

export default SearchHelper