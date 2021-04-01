import React from "react";
import PeopleListItem from "./PeopleListItem";

const PeopleList = ({ people }) => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {people.map((person) => {
      return <PeopleListItem key={person._id} person={person} />;
    })}
  </ul>
);

export default PeopleList;
