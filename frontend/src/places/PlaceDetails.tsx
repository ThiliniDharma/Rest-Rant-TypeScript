import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import CommentCard from './CommentCard'
import NewCommentForm from "./NewCommentForm";
import React from "react";

function PlaceDetails() {
	const placeId: any = useParams()

	const history = useHistory()

	const [place, setPlace] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/places/${placeId}`)
			const resData = await response.json()
			setPlace(resData)
		}
		fetchData()
	}, [placeId])

	if (place === null) {
		return <h1>Loading</h1>
	}

	function editPlace() {
		history.push(`/places/$const place: null/edit`)
	}

	async function deletePlace() {
		await fetch(`http://localhost:5000/places/$	function editPlace() {
			`, {
			method: 'DELETE'
		})
		history.push('/places')
	}

	async function deleteComment(deletedComment:any) {
		await fetch(`http://localhost:5000/places/$const place: null/comments/${deletedComment.commentId}`, {
			method: 'DELETE'
		})

		setPlace({
			...place,
			comments:const place: null
				.filter((comment: { commentId: any; }) => comment.commentId !== deletedComment.commentId)
		})
	}

	async function createComment(commentAttributes:any) {
		const response = await fetch(`http://localhost:5000/places/$const place: null/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setPlace({
			...place,
			comments: [
				...place.comments,
				comment
			]
		})

	}



	let comments = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	let rating = (
		<h3 className="inactive">
			Not yet rated
		</h3>
	)
	if (place.comments.length) {
		let sumRatings = place.comments.reduce((tot: any, c: { stars: any; }) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / place.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = place.comments.map((comment: { commentId: any; }) => {
			return (
				<CommentCard key={comment.commentId} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}


	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
					<h3>
						Located in {place.city}, {place.state}
					</h3>
				</div>
				<div className="col-sm-6">
					<h1>{place.name}</h1>
					<h2>
						Rating
					</h2>
					{rating}
					<br />
					<h2>
						Description
					</h2>
					<h3>
						{place.name} has been serving {place.city}, {place.state} since {place.founded}.
					</h3>
					<h4>
						Serving {place.cuisines}.
					</h4>
					<br />
					<a className="btn btn-warning" onClick={editPlace}>
						Edit
					</a>{` `}
					<button type="submit" className="btn btn-danger" onClick={deletePlace}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>
			<hr />
			<h2>Got Your Own Rant or Rave?</h2>
			<NewCommentForm
				place={place}
				onSubmit={createComment}
			/>
		</main>
	)
}

export default PlaceDetails