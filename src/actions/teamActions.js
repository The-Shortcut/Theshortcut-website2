import { INIT_TEAM_MEMBERS, INIT_BOARD_MEMBERS, INIT_BYOB_SPEAKERS } from './types';
import teamServices from '../services/teams';

export const teamMembers = () => async (dispatch) => {
  const teamMembers = await teamServices.getTeamMembers();
  dispatch({
    type: INIT_TEAM_MEMBERS,
    payload: teamMembers.reverse(),
  });
};

export const boardMembers = () => async (dispatch) => {
  const boardMembers = await teamServices.getBoardMembers();

  dispatch({
    type: INIT_BOARD_MEMBERS,
    payload: boardMembers,
  });
};

export const byobSpeakers = () => async (dispatch) => {
  const byobSpeakers = await teamServices.getByobSpeakers();
  dispatch({
    type: INIT_BYOB_SPEAKERS,
    payload: byobSpeakers,
  });
};
