import { Controller, Get, OperationId, Route, SuccessResponse } from 'tsoa';
import { PhoneNumberResponse } from '../models/phoneNumber';

@Route('/phone-numbers')
export class PhoneNumberController extends Controller {
  @SuccessResponse(200, 'OK')
  @Get("{phoneNumberId}")
  @OperationId('getPhoneNumber')
  public async getPhoneNumber(
    @Path("phoneNumberId") phoneNumberId: string
  ): Promise<PhoneNumberResponse> {
    return new PhoneNumberResponse();
  }
}
