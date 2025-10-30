import { NextResponse } from 'next/server';

/**
 * Apple App Site Association (AASA) file for iOS Universal Links
 * Enables deep linking for the Ohana app
 */

export async function GET() {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "HNLXKH6PKX.com.mofakolabs.ohana",
          paths: ["/event/*"]
        }
      ]
    }
  };

  return NextResponse.json(aasa, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
