import { openExternalLink } from '../../utils';
import { githubUrl, instagramUrl } from '../SocialMedia';
import { IconActionType } from './type';

function isValid(value: unknown) {
  if (typeof value === 'string' && value.length > 2) {
    return true;
  }

  return false;
}

function getSocialMediaId(value: string) {
  return value.split('/').pop();
}

export const socialActions: IconActionType[] = [];

function pushActionWhenValid(value: string, action: IconActionType) {
  if (!isValid(value)) return;
  socialActions.push(action);
}

pushActionWhenValid(githubUrl, {
  id: 'github',
  name: 'Github',
  subtitle: getSocialMediaId(githubUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'github, source code, open, code',
  icon: 'Github',
  perform: () => openExternalLink(githubUrl),
});

pushActionWhenValid(instagramUrl, {
  id: 'instagram',
  name: 'Instagram',
  subtitle: getSocialMediaId(instagramUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, meta, contact, social media',
  icon: 'Instagram',
  perform: () => openExternalLink(instagramUrl),
});
