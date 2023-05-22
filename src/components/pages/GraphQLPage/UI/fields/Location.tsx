import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';

const Location = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {};

  return (
    <>
      <div>
        <span>location</span>
        <span>(&nbsp;</span>
        <Arg name="id" type="ID" nonNull={true} lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Location
        </span>
      </div>
      <p className={styles.title_text}>Get a specific locations by ID</p>
    </>
  );
};

export default Location;
