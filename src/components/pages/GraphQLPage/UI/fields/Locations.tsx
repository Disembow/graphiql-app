import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';

const Locations = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {};

  return (
    <>
      <div>
        <span>locations</span>
        <span>(&nbsp;</span>
        <Arg name="page" type="Int" />
        <Arg name="filter" type="FilterLocation" lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Locations
        </span>
      </div>
      <p className={styles.title_text}>Get the list of all locations</p>
    </>
  );
};

export default Locations;
