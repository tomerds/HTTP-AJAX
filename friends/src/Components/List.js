import React from 'react';
import { Button, Card, CardBody, CardGroup, CardText, CardTitle } from 'reactstrap';
import styled from 'styled-components';

import DropDown from './DropDown';


const ListContainer = styled.ul`
  list-style-type: none;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 70px;
  padding-bottom: 70px;
  border-bottom: grey 0.5px dashed;
`;

const CardEdit = styled(CardGroup)`
  width:50%;
  margin: 0 auto;
`;


const List = (props) => {
  console.log("hello", props.friends.data)
  return (
    <ListContainer>

      {props.friends.map(friend => {
        return (
          <CardEdit>
            <Card>
              <CardBody>
                <CardTitle><Button close onClick={(e) => props.delete(e, friend.id)} /></CardTitle>
                <CardText><li key={friend.id}>
                  <p>{friend.name}</p>
                  <p>{friend.age}</p>
                  <p>{friend.email}</p>
                </li>
                </CardText>
                <DropDown id={friend.id} updateForm={props.updateForm} handleChange={props.handleChange}
                  emailValue={props.emailValue}
                  ageValue={props.ageValue}
                  nameValue={props.nameValue}
                />
              </CardBody>
            </Card>
          </CardEdit>
        )
      })}

    </ListContainer>
  )
}

export default List;