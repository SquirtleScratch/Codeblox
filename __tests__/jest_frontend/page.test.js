/**
 * path:  __tests__/FileExistence.test.js
 */

import fs from 'fs';
import path from 'path';

describe('File existence tests', () => {
  it('check if CHALLENGE page file exists', () => {
    const challengeFilePath = path.join(__dirname, '../../src/app/challenge/page.tsx');
    expect(fs.existsSync(challengeFilePath)).toBe(true);
  });

  it('check if GAME page file exists', () => {
    const gameFilePath = path.join(__dirname, '../../src/app/game/page.tsx');
    expect(fs.existsSync(gameFilePath)).toBe(true);
  });

  it('check if IFELSE page file exists', () => {
    const ifelseFilePath = path.join(__dirname, '../../src/app/ifelse/page.tsx');
    expect(fs.existsSync(ifelseFilePath)).toBe(true);
  });
});