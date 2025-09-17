/**
 * 시(텍스트)를 가사/코드/멜로디로 변환하는 샘플 유틸 함수
 * - 코드 진행/멜로디는 랜덤 추천
 * - 실제 AI 연동 전용 샘플
 */
// 코드 진행 샘플 (엔카/발라드풍)
const chordProgressions = [
  'Am – F – C – G',
  'Dm – G – C – Am',
  'Em – Am – Dm – G',
  'C – G – Am – F',
  'F – G – Em – Am',
  'Bm – Em – A – D',
  'G – Em – Am – D7',
  'E – A – B – E',
  'A – F#m – D – E',
  'Cm – G – Bb – Eb',
];

// 샘플 멜로디 오디오 URL 목록 (무료 음원, 테스트용)
const melodyUrls = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
];

export function generateLyricsAndChords(poem: string) {
  // 시를 간단히 가사로 변환 (줄바꿈 유지)
  const lyrics = poem.trim();
  // 코드 진행 무작위 추천
  const chords = chordProgressions[Math.floor(Math.random() * chordProgressions.length)];
  // 샘플 멜로디(임시 오디오 파일, 무작위)
  const melodyUrl = melodyUrls[Math.floor(Math.random() * melodyUrls.length)];
  return { lyrics, chords, melodyUrl };
}
