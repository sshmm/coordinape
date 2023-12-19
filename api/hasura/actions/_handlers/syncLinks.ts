import type { VercelRequest, VercelResponse } from '@vercel/node';

import { getInput } from '../../../../api-lib/handlerHelpers';
import { errorResponse } from '../../../../api-lib/HttpError';
import { updateHoldersFromRecentBlocks } from '../../../../src/features/colinks/api/updateHolders';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const payload = await getInput(req);
    await updateHoldersFromRecentBlocks(payload.session.hasuraAddress);
    return res.status(200).json({ success: true });
  } catch (e: any) {
    return errorResponse(res, e);
  }
}
