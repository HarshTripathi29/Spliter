import React from 'react';
import { useParams } from 'react-router-dom';
import Group from './Group';

const GroupList = ({ groups, setGroups }) => {
  const { groupId } = useParams();
  const group = groups.find((g) => g.id === parseInt(groupId));

  return group ? <Group group={group} setGroups={setGroups} groups={groups} /> : <p>Group not found</p>;
};

export default GroupList;
