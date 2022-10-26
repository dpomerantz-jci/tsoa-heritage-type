import { Controller, Get, OperationId, Route, SuccessResponse } from 'tsoa';
import { AddressResponse } from '../models/address';

@Route('/addressess')
export class AddressController extends Controller {
  @SuccessResponse(200, 'OK')
  @Get("{addressId}")
  @OperationId('getAddress')
  public async getAddress(
    @Path("addressId") addressId: string
  ): Promise<AddressResponse> {
    return new AddressResponse();
  }
}
