from rest_framework import routers
from django.conf.urls import url, include
from music_history import views

router = routers.DefaultRouter()
router.register(r'artists', views.ArtistView)
router.register(r'albums', views.AlbumView)
router.register(r'tracks', views.TrackView)

urlpatterns = [
    url(r'^', include(router.urls)),
]
