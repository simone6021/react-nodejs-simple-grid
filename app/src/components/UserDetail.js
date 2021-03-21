import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { getUser } from '../services/UserService';

const UserDetailWrapper = styled.div`
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 54px;
  width: 100%;
  font-size: 13px;
`;
// font-size: ${props => props.theme.rows.fontSize}

const UserDetailWrapperLabel = styled.label`
  font-weight: 700;
`;

export const UserDetail = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Despite setting data as a dependency, this effect is triggered everytime the expanded row is opened/rendered.
    // This leads to an API call on every expand which is useless after the first one, so augment passed data.
    // TODO: poisoning a state object seems not clean, so either solve this trough effect dependency
    //       or by lifting state up which would be straightforward if this component was a class.
    if (data._userDetailLoaded) {
      setUser(data);
    }
    else {
      getUser(data.id)
        .then(fetchedUser => {
          setUser(fetchedUser);
          Object.assign(data, {_userDetailLoaded: true}, fetchedUser);
        });
    }
  }, [data]);

  return(
      <UserDetailWrapper>
        <div><UserDetailWrapperLabel>Gender:</UserDetailWrapperLabel> {user.gender}</div>
        <div><UserDetailWrapperLabel>Country:</UserDetailWrapperLabel> {user.country}</div>
        <div><UserDetailWrapperLabel>Job Title:</UserDetailWrapperLabel> {user.job_title}</div>
      </UserDetailWrapper>
  )
}

export default UserDetail;
