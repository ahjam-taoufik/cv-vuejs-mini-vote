// console.log(Feed.stories);

new Vue({
	el: '#app',
	data: {
		stories: Feed.stories
	},
	methods: {
		addVote(id){
			this.stories.findIndex((storie)=>{
                if(storie.id===id){
					storie.votes++
				}
			})
		}
	}
});
