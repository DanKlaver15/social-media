import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUserRequest } from "../../state/User/thunks";
import Error from "../Error";
import UsePageHeader from "../UserPageHeader";

const SinglePerson = ({ person, getPerson }) => {
  const { id } = useParams();

  useEffect(() => {
    getPerson(id);
  }, [id, getPerson]);

  return person && Object.entries(person).length > 0 ? (
    <UsePageHeader
      avatar={person.avatar}
      name={`${person.firstName} ${person.lastName}`}
    >
      <div>Children Example</div>
    </UsePageHeader>
  ) : (
    <Error message="Failed to load person." />
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch) => ({
  getPerson: (id) => dispatch(getUserRequest(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SinglePerson);
