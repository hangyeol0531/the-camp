import { AxiosResponse } from 'axios';

export function assertsResponse(response: AxiosResponse) {
	if (response.data.resultCd !== '0000') {
		throw new Error(
			response.data.resultMsg || '알 수 없는 오류가 발생하였습니다.',
		);
	}
}
