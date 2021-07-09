import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

export async function getSuggestedProfiles(userId, following) {
    const result = await firebase
    .firestore()
    .collection('users')
    .limit(10)
    .get();

    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}

// toggling function: allows user to follow AND unfollow
export async function updateLoggedInUserFollowing(
    loggedInUserDocId, // currently logged-in user document id
    profileId, // the profile that logged-in user requests to follow
    isFollowingProfile // boolean (default false in suggestions, am i currently following?)
    ) {
        return firebase
            .firestore()
            .collection('users')
            .doc(loggedInUserDocId)
            .update({
                following: isFollowingProfile
                ? FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId)
            });
    }

// toggling function: updates followers array of targeted profile 
export async function updateFollowedUserFollowers(
    loggedInUserDocId,
    profileDocId,
    isFollowingProfile
    ) {
    return firebase
        .firestore()
        .collection('users')
        .doc(profileDocId)
        .update({
            followers: isFollowingProfile
            ? FieldValue.arrayRemove(loggedInUserDocId)
            : FieldValue.arrayUnion(loggedInUserDocId)
        });

}