/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-4 (A-E)
}

export type QuizState = 'START' | 'QUIZ' | 'RESULT';
