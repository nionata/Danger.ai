import firebase_admin
from firebase_admin import firestore
import flask

def getDangerScores(request):
	if request.method == 'GET':
		db = firestore.Client()
		videosSnap = db.collection('videos').get()
		videos = []
		for vid in videosSnap:
			videos.append(vid.to_dict())
		resp = flask.jsonify(videos)
		resp.headers.add('Access-Control-Allow-Origin', '*')
		resp.status_code = 200
		return resp
	elif request.method == 'POST':
		print(request)
		print(request.json)
		request_json = request.json
		_name = request_json['name']
		_gcp = request_json['gcp']
		_pose = request_json['pose']
		_pixel = request_json['pixel']
		if _name and _gcp and _pose and _pixel:
			video = {
				'name': _name,
				'gcp': _gcp,
				'pose': _pose,
				'pixel': _pixel
			}
			
			firestore.Client().collection('videos').add(video)
			resp = flask.jsonify('Video added successfully')
			resp.headers.add('Access-Control-Allow-Origin', '*')
			resp.status_code = 200
			return resp
	else:
		return not_found(request)

def not_found(request):
	message = {
		'status': 404,
		'message': 'Not Found: ' + request.url,
	}
	resp = flask.jsonify(message)
	resp.status_code = 404
	return resp
