/** @format */

import React, { useState, useEffect } from "react";
import classes from "../hero/hero.module.scss";
import Form from "../form/form";
function Hero() {
	const current = new Date();
	const getLocalList = () => {
		const storedUserCommentInfo = localStorage.getItem("usersList");
		// console.log(storedUserCommentInfo)
		if (storedUserCommentInfo) {
			return JSON.parse(localStorage.getItem("usersList"));
		} else {
			return [];
		}
	};
	const [usersList, setUsersList] = useState(getLocalList());

	useEffect(() => {
		localStorage.setItem("usersListInLocalStorage", JSON.stringify(usersList));
	}, [usersList]);

	const addUserHandler = (uName, uComment) => {
		setUsersList((usersList) => {
			return [
				...usersList,
				{
					name: uName,
					comment: uComment,
					id: Math.random().toString(),
					date: `${current.getDate()}/${
						current.getMonth() + 1
					}/${current.getFullYear()}`,
				},
			];
		});
	};

	return (
		<div>
			<div className="content">
				<div className={classes.hero}>
					<h1 className={classes.hero__header}>The Bees Knees</h1>
				</div>
				<div className={classes.about}>
					<h2 className={classes.about__header}>About the Musicians</h2>
					<img
						className={classes.about__image}
						src="/assets/images/band.jpg"
						alt="bandimage"
					/>

					<p className={classes.about__copy}>
						“We push each other to be the best. It’s not uncommon for one of us
						to say ‘this needs to be better, back to the drawing board’”
					</p>
					<p className={classes.about__copy__refrence}>
						- Bryan Teddy,lead vocalist of The Bees Knees
					</p>

					<h3 className={classes.about__subheader}>The Bees Knees</h3>

					<div className={classes.description}>
						<p className={classes.description__copy__left}>
							The Bees Knees is a pop rock band originating from San Francisco,
							California. The band consists of lead vocalist Bryan Teddy,
							guitarist Mack Tolkens, guitarist Andrew Green, bassist Kent
							Zulkee and drummer Freddie Fischer. The band achieved its first
							commercial success as an unsigned act, drawing attention from
							manager Cam Adams. Having worked with other popular acts (The
							Elephant In The Room, One Trick Pony, The Cat’s Meow), Adams was
							confident the band could succeed even further, pushing them to
							sign with Magenta Records.
						</p>

						<p className={classes.description__copy__right}>
							From there, the band has soared, gaining international recognition
							and ranking in the top 10 on the Poster Charts. New fans
							immediately fell in love with the band’s original and organic
							attitude, solidifying their place as one of the hottest and
							fastest up and coming acts of this century. Fans affectionately
							refer to themselves as “The Hive” and are drawn to their candid
							and authentic performances on stage. Looking forward to touring in
							the future, The Bees Knees are currently recording their second
							studio album, looking to be released in late 2021.
						</p>
					</div>

					<section className={classes.photo__gallery}>
						<h2 className={classes.photo__gallery__header}>Photo Gallery</h2>

						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-1.jpg"
							alt="gallery image1"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-2.jpg"
							alt="gallery-image2"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-3.jpg"
							alt="gallery image3"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-4.jpg"
							alt="gallery image4"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-5.jpg"
							alt="gallery image5"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-6.jpg"
							alt="gallery image6"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-7.jpg"
							alt="gallery image7"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-8.jpg"
							alt="gallery image8"
						/>
						<img
							className={classes.photo__gallery__image}
							src="./assets/images/Photo-gallery-9.jpg"
							alt="gallery image9"
						/>
					</section>

					{/*
      <section>
        
        </div> */}
				</div>
				<Form Users={usersList} onAddUser={addUserHandler} />
			</div>
		</div>
	);
}

export default Hero;
