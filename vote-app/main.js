// console.log(Feed.stories);

new Vue({
	el: '#app',
	data: {
		stories: Feed.stories
	},
	methods: {
		// version2
		addVote(id){
			const index =this.stories.findIndex(storie=>storie.id===id)
			this.stories[index].votes++
		},
		// version 1
		// addVote(id){
		// 	this.stories.findIndex((storie)=>{
        //         if(storie.id===id){
		// 			storie.votes++
		// 		}
		// 	})
		// },
	},
	computed:{
		sortByVotes(){
			return this.stories.sort((a,b)=>{
				return b.votes-a.votes
			})
		}
	}
});
