
import { render, screen } from '@testing-library/react';
import PoemInput from './PoemInput';

// i18n mock
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, opts?: any) => {
      const dict: Record<string, string> = {
        input_placeholder: '시를 입력하세요...',
        convert: '변환',
        example: '예시 불러오기',
        char_count: (opts && opts.count !== undefined) ? `${opts.count}자` : '0자',
        too_short: '5자 이상 입력해 주세요.',
        too_long: '최대 500자까지 입력할 수 있습니다.'
      };
      return dict[key] || key;
    },
  }),
}));

describe('PoemInput', () => {
  it('renders textarea and buttons', () => {
    render(
      <PoemInput poem="" setPoem={() => {}} setResult={() => {}} />
    );
    expect(screen.getByPlaceholderText(/시를 입력|詩を入力/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /변환|変換/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /예시 불러오기|サンプルを読み込む/ })).toBeInTheDocument();
  });

  it('disables 변환 button if input is too short', () => {
    render(
      <PoemInput poem="안녕" setPoem={() => {}} setResult={() => {}} />
    );
    expect(screen.getByRole('button', { name: /변환|変換/ })).toBeDisabled();
  });
});
