import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getPersonRequest } from "../../state/User/thunks";
import Error from "../Error";
import UsePageHeader from "../UserPageHeader";
import UserBio from "../UserBio";

const SinglePerson = ({ userId, person, getPerson }) => {
  const { id } = useParams();

  useEffect(() => {
    getPerson(id, userId);
  }, [id, getPerson, userId]);

  return person && Object.entries(person).length > 0 ? (
    <UsePageHeader
      avatar={person.avatar}
      name={`${person.firstName} ${person.lastName}`}
    >
      <UserBio bio={person.bio} />
    </UsePageHeader>
  ) : (
    <Error message="Failed to load person." />
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
  userId: state.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  getPerson: (id, userId = null) => dispatch(getPersonRequest(id, userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SinglePerson);
