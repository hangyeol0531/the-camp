import { loginRequester } from '../login';
import { registerCafeRequester } from './register-cafe.requester';

describe.skip('RegisterCafeRequester e2e', () => {
	it('성공', async () => {
		const session = await loginRequester.request({
			id: '',
			password: '',
		});
		await registerCafeRequester.request(
			{
				이름: '홍길동',
				생년월일Code: '08IyuIy6/tXS/vveGiNc+Q==',
				입영일: '2022-02-14',
				군종: '육군',
				입영부대: '육군훈련소-논산',
				입영부대TypeCode: '0000140001',
				관계: '배우자',
			},
			session,
		);
	});
});
