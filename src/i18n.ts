import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      title: 'AI 작사·작곡 도우미',
      input_placeholder: '시를 입력하세요...',
      convert: '변환',
      example: '예시 불러오기',
      result_title: '🎵 변환 결과',
      result_guide: '아래는 입력하신 시를 기반으로 생성된 가사와 코드입니다.',
      code_progression: '코드 진행',
      copy: '복사',
      copied: '복사됨!',
      audio_preview: '🎶 멜로디 프리뷰',
      audio_download: '오디오 다운로드',
      audio_none: '멜로디 오디오가 없습니다.',
      audio_error: '오디오를 재생할 수 없습니다. 네트워크 또는 파일 문제일 수 있습니다.',
      char_count: '{{count}}자',
      too_short: '5자 이상 입력해 주세요.',
      too_long: '최대 500자까지 입력할 수 있습니다.',
      guide_main: '시를 입력하고 <b>변환</b>을 누르면<br />가사, 코드, 멜로디 샘플이 생성됩니다.',
  guide_example: '엔카풍 예시가 궁금하다면 <b>예시 불러오기</b>를 눌러보세요!',
  feedback_title: '피드백 보내기',
  feedback_placeholder: '의견, 버그, 개선점 등을 자유롭게 남겨주세요.',
  feedback_submit: '제출',
  feedback_thanks: '소중한 의견 감사합니다!'
    }
  },
  ja: {
    translation: {
      title: 'AI作詞・作曲アシスタント',
      input_placeholder: '詩を入力してください...',
      convert: '変換',
      example: 'サンプルを読み込む',
      result_title: '🎵 変換結果',
      result_guide: '以下は入力した詩をもとに生成された歌詞とコードです。',
      code_progression: 'コード進行',
      copy: 'コピー',
      copied: 'コピー済み!',
      audio_preview: '🎶 メロディプレビュー',
      audio_download: 'オーディオをダウンロード',
      audio_none: 'メロディオーディオがありません。',
      audio_error: 'オーディオを再生できません。ネットワークまたはファイルの問題の可能性があります。',
      char_count: '{{count}}文字',
      too_short: '5文字以上入力してください。',
      too_long: '最大500文字まで入力できます。',
      guide_main: '詩を入力し<b>変換</b>を押すと<br />歌詞・コード・メロディサンプルが生成されます。',
  guide_example: '演歌風サンプルが気になる方は<b>サンプルを読み込む</b>を押してください！',
  feedback_title: 'フィードバックを送る',
  feedback_placeholder: 'ご意見・バグ・改善点などご自由にお書きください。',
  feedback_submit: '送信',
  feedback_thanks: 'ご意見ありがとうございます！'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
