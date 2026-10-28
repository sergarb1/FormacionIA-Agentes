#!/usr/bin/env python3
"""Servidor estático con fallback SPA para revisar los decks de Slidev
compilados (mismo layout que GitHub Pages). Uso: python3 server.py [puerto]"""
import http.server
import logging
import os
import sys
import urllib.parse

ROOT = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        # Fallback SPA: si no existe el fichero, sirve el index.html del deck
        # (equivalente al comportamiento de GitHub Pages con _redirects/404.html)
        if not os.path.exists(p):
            probe = p
            while probe.startswith(ROOT):
                idx = os.path.join(probe, 'index.html')
                if os.path.isfile(idx):
                    return idx
                probe = os.path.dirname(probe)
        return p


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
    handler = lambda *a, **kw: SPAHandler(*a, directory=ROOT, **kw)
    logging.basicConfig(level=logging.WARNING)
    http.server.ThreadingHTTPServer(('127.0.0.1', port), handler).serve_forever()
