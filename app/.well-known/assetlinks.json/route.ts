import { NextResponse } from 'next/server';

/**
 * Digital Asset Links file for Android App Links
 * Enables deep linking for the Ohana app on Android
 */

export async function GET() {
  const assetlinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.mofakolabs.ohana",
        sha256_cert_fingerprints: [
          // Debug certificate
          "7A:76:94:C2:E7:8F:7A:BC:90:25:08:9B:C5:3E:E7:2F:6C:72:1E:64:EB:7E:B4:21:7A:36:62:EF:EE:1D:F2:C8",
          // Add release certificate fingerprint here for production
        ]
      }
    }
  ];

  return NextResponse.json(assetlinks, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
