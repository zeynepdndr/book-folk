export const firestoreTimestampToDate = (timestamp) => {
  if (!timestamp) return false;
  return new Date(timestamp.seconds * 1000);
};
