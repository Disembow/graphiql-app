import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import {
  toggleIsQueryLvl,
  toggleIsIdLvl,
  toggleIsLocationLvl,
  toggleIsQuerySubLvl,
} from '../../../../../app/slices/docsSlise';
import { useAppDispatch } from '../../../../../app/hooks';

const Location = () => {
  const dispatch = useAppDispatch();

  const goToId = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(flag === 'goto'));
    dispatch(toggleIsIdLvl(flag === 'goto'));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(false));
    dispatch(toggleIsLocationLvl(true));
  };

  return (
    <>
      <div>
        <span>location</span>
        <span>(&nbsp;</span>
        <Arg name="id" type="ID" nonNull={true} lastArg={true} callback={() => goToId('goto')} />
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
